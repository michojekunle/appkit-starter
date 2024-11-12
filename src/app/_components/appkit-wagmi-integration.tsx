import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useReadContract,
  useWriteContract,
  useSignMessage,
  useAccount,
} from "wagmi";
import { FileCode, PenTool, MessageSquare } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const mockABI = [
  {
    inputs: [],
    name: "getValue",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export default function AppKitWagmiIntegration() {
  const { isConnected } = useAccount();
  const { data: contractValue } = useReadContract({
    address: contractAddress as `0x${string}`,
    abi: mockABI,
    functionName: "getValue",
  });

  const { writeContractAsync: setValue } = useWriteContract();

  const { signMessage } = useSignMessage();

  const codeExamples = {
    read: {
      ts: [
        `
import { useReadContract } from 'wagmi'

const { data: contractValue } = useReadContract({
  address: '${contractAddress}',
  abi: mockABI,
  functionName: 'getValue',
})
      `,
      ],
      js: [
        `
import { useReadContract } from 'wagmi'

const { data: contractValue } = useReadContract({
  address: '${contractAddress}',
  abi: mockABI,
  functionName: 'getValue',
})
      `,
      ],
    },
    write: {
      ts: [
        `
import { useWriteContract } from 'wagmi'

const { writeContractAsync: setValue } = useWriteContract();

// Usage
setValue({
  address: contractAddress,
  abi: mockABI,
  functionName: "setValue",
  args: [42],
})
      `,
      ],
      js: [
        `
import { useWriteContract } from 'wagmi'

const { writeContractAsync: setValue } = useWriteContract();

// Usage
setValue({
  address: contractAddress,
  abi: mockABI,
  functionName: "setValue",
  args: [42],
})
      `,
      ],
    },
    sign: {
      ts: [
        `
import { useSignMessage } from 'wagmi'

const { signMessage } = useSignMessage();

// Usage
signMessage({ message: 'Hello Web3!' })
      `,
      ],
      js: [
        `
import { useSignMessage } from 'wagmi'

const { signMessage } = useSignMessage();

// Usage
signMessage({ message: 'Hello Web3!' })
      `,
      ],
    },
  };

  const InteractionCard = ({
    title,
    icon,
    demoContent,
    codeExample,
  }: {
    title: string;
    icon: React.ReactNode;
    demoContent: React.ReactNode;
    codeExample: { js?: string[]; ts?: string[] };
  }) => (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
      <CardHeader>
        {icon}
        <CardTitle className="text-gray-900 dark:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="demo">Demo</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="demo" className="text-gray-900 dark:text-white">
            {demoContent}
          </TabsContent>
          <TabsContent value="code">
            <Tabs defaultValue="typescript" className="w-full">
              {/* <TabsList className="inline-flex h-8 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground mb-2">
                <TabsTrigger
                  value="typescript"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-2 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  TypeScript
                </TabsTrigger>
                <TabsTrigger
                  value="javascript"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-2 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  JavaScript
                </TabsTrigger>
              </TabsList> */}
              <TabsContent value="typescript">
                <SyntaxHighlighter
                  language="typescript"
                  style={tomorrow}
                  customStyle={{ background: "transparent", padding: "0" }}
                >
                  {codeExample.ts || [""]}
                </SyntaxHighlighter>
              </TabsContent>
              <TabsContent value="javascript">
                <SyntaxHighlighter
                  language="javascript"
                  style={tomorrow}
                  customStyle={{ background: "transparent", padding: "0" }}
                >
                  {codeExample.js || [""]}
                </SyntaxHighlighter>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-12 md:py-24 lg:py-32 ">
      <div className="container md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          AppKit & Wagmi Integration
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <InteractionCard
            title="Read Contract"
            icon={
              <FileCode className="w-8 h-8 mb-2 text-gray-900 dark:text-white" />
            }
            demoContent={
              <p className="text-gray-900 dark:text-white">
                Current contract value: {contractValue?.toString() || "N/A"}
              </p>
            }
            codeExample={codeExamples.read}
          />
          <InteractionCard
            title="Write Contract"
            icon={
              <PenTool className="w-8 h-8 mb-2 text-gray-900 dark:text-white" />
            }
            demoContent={
              isConnected ? (
                <Button
                  onClick={() =>
                    setValue({
                      address: contractAddress as `0x${string}`,
                      abi: mockABI,
                      functionName: "setValue",
                      args: [42],
                    })
                  }
                  className="bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                >
                  Set Value to 42
                </Button>
              ) : (
                <w3m-connect-button size="md"/>
              )
            }
            codeExample={codeExamples.write}
          />
          <InteractionCard
            title="Sign Message"
            icon={
              <MessageSquare className="w-8 h-8 mb-2 text-gray-900 dark:text-white" />
            }
            demoContent={
              <>
                {" "}
                {isConnected ? (
                  <Button
                    onClick={() => signMessage({ message: "Hello Web3!" })}
                    className="bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                  >
                    Sign Message
                  </Button>
                ) : (
                  <w3m-connect-button size="md"/>
                )}
                {/* {message && (
                  <p className="mt-2 text-sm text-gray-900 dark:text-white">
                    {message}
                  </p>
                )} */}
              </>
            }
            codeExample={codeExamples.sign}
          />
        </div>
      </div>
    </section>
  );
}
