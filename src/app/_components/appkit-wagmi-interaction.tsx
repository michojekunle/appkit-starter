import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useContractRead, useContractWrite, useSignMessage, useAccount } from 'wagmi'
import { FileCode, PenTool, MessageSquare } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const mockABI = [
  {
    "inputs": [],
    "name": "getValue",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "_value", "type": "uint256"}],
    "name": "setValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const contractAddress = '0x1234567890123456789012345678901234567890'

export default function AppKitWagmiIntegration() {
  const [message, setMessage] = useState('')
  const { address } = useAccount()

  const { data: contractValue } = useContractRead({
    address: contractAddress,
    abi: mockABI,
    functionName: 'getValue',
  })

  const { write: setValue } = useContractWrite({
    address: contractAddress,
    abi: mockABI,
    functionName: 'setValue',
  })

  const { signMessage } = useSignMessage({
    onSuccess(data, variables) {
      setMessage(`Address ${address} signed message: ${variables.message}`)
    },
  })

  const codeExamples = {
    read: {
      ts: `
import { useContractRead } from 'wagmi'

const { data: contractValue } = useContractRead({
  address: '${contractAddress}',
  abi: mockABI,
  functionName: 'getValue',
})
      `,
      js: `
import { useContractRead } from 'wagmi'

const { data: contractValue } = useContractRead({
  address: '${contractAddress}',
  abi: mockABI,
  functionName: 'getValue',
})
      `
    },
    write: {
      ts: `
import { useContractWrite } from 'wagmi'

const { write: setValue } = useContractWrite({
  address: '${contractAddress}',
  abi: mockABI,
  functionName: 'setValue',
})

// Usage
setValue({ args: [42] })
      `,
      js: `
import { useContractWrite } from 'wagmi'

const { write: setValue } = useContractWrite({
  address: '${contractAddress}',
  abi: mockABI,
  functionName: 'setValue',
})

// Usage
setValue({ args: [42] })
      `
    },
    sign: {
      ts: `
import { useSignMessage } from 'wagmi'

const { signMessage } = useSignMessage({
  onSuccess(data, variables) {
    setMessage(\`Address \${address} signed message: \${variables.message}\`)
  },
})

// Usage
signMessage({ message: 'Hello Web3!' })
      `,
      js: `
import { useSignMessage } from 'wagmi'

const { signMessage } = useSignMessage({
  onSuccess(data, variables) {
    setMessage(\`Address \${address} signed message: \${variables.message}\`)
  },
})

// Usage
signMessage({ message: 'Hello Web3!' })
      `
    }
  }

  const InteractionCard = ({ title, icon, demoContent, codeExample }) => (
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
              <TabsList className="inline-flex h-8 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground mb-2">
                <TabsTrigger value="typescript" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-2 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                  TypeScript
                </TabsTrigger>
                <TabsTrigger value="javascript" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-2 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                  JavaScript
                </TabsTrigger>
              </TabsList>
              <TabsContent value="typescript">
                <SyntaxHighlighter language="typescript" style={tomorrow} customStyle={{background: 'transparent', padding: '0'}}>
                  {codeExample.ts}
                </SyntaxHighlighter>
              </TabsContent>
              <TabsContent value="javascript">
                <SyntaxHighlighter language="javascript" style={tomorrow} customStyle={{background: 'transparent', padding: '0'}}>
                  {codeExample.js}
                </SyntaxHighlighter>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          AppKit & Wagmi Integration
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <InteractionCard
            title="Read Contract"
            icon={<FileCode className="w-8 h-8 mb-2 text-gray-900 dark:text-white" />}
            demoContent={
              <p className="text-gray-900 dark:text-white">Current contract value: {contractValue?.toString() || 'N/A'}</p>
            }
            codeExample={codeExamples.read}
          />
          <InteractionCard
            title="Write Contract"
            icon={<PenTool className="w-8 h-8 mb-2 text-gray-900 dark:text-white" />}
            demoContent={
              <Button 
                onClick={() => setValue({ args: [42] })}
                className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Set Value to 42
              </Button>
            }
            codeExample={codeExamples.write}
          />
          <InteractionCard
            title="Sign Message"
            icon={<MessageSquare className="w-8 h-8 mb-2 text-gray-900 dark:text-white" />}
            demoContent={
              <>
                <Button 
                  onClick={() => signMessage({ message: 'Hello Web3!' })}
                  className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Sign Message
                </Button>
                {message && <p className="mt-2 text-sm text-gray-900 dark:text-white">{message}</p>}
              </>
            }
            codeExample={codeExamples.sign}
          />
        </div>
      </div>
    </section>
  )
}