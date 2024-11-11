import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Layers, Zap } from 'lucide-react'
import Header from './header'
import { useAccount } from 'wagmi';
import AppKitWagmiIntegration from './appkit-wagmi-integration'

export default function LandingPage() {
  const { isConnected } = useAccount();
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 max-w-[1800px] mx-auto">
      <Header />
      <main className="flex-1">
        <section className="w-full px-4 sm:px-8 lg:px-16 py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-white">
                  Next.js AppKit Starter
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-900 mt-4 md:text-xl dark:text-gray-200">
                  Jumpstart your Web3 development Dapps with this powerful and flexible starter kit.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                  <Link href="#">Get Started</Link>
                </Button>
                <Button variant="outline" asChild className="text-gray-900 border-gray-900 hover:bg-gray-900/10 dark:text-white dark:border-white dark:hover:bg-white/10">
                  <Link href="https://github.com/michojekunle/appkit-starter">GitHub</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-4 sm:px-8 lg:px-16 py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-white/50 backdrop-blur-lg dark:bg-gray-800/50">
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-yellow-500" />
                  <CardTitle>AppKit Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  Seamlessly interact with smart contracts using AppKit&apos;s powerful tools and abstractions.
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-lg dark:bg-gray-800/50">
                <CardHeader>
                  <Globe className="w-8 h-8 mb-2 text-blue-500" />
                  <CardTitle>Wagmi Hooks</CardTitle>
                </CardHeader>
                <CardContent>
                  Leverage wagmi&apos;s React hooks for effortless Ethereum interactions and wallet management.
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-lg dark:bg-gray-800/50">
                <CardHeader>
                  <Layers className="w-8 h-8 mb-2 text-green-500" />
                  <CardTitle>Next.js 13+ Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  Built on the latest Next.js features, including the App Router and Server Components.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <AppKitWagmiIntegration />
        <section className="w-full px-4 sm:px-8 lg:px-16 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Quick Start
            </h2>
            <Tabs defaultValue="install" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="install">Install</TabsTrigger>
                <TabsTrigger value="configure">Configure</TabsTrigger>
                <TabsTrigger value="use">Use</TabsTrigger>
              </TabsList>
              <TabsContent value="install">
                <Card>
                  <CardHeader>
                    <CardTitle>Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      npx create-next-app@latest --example https://github.com/michojekunle/appkit-starter
                    </code>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="configure">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Edit <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">.env.local</code> to add your project-specific variables.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="use">
                <Card>
                  <CardHeader>
                    <CardTitle>Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Import AppKit and wagmi hooks in your components and start interacting with smart contracts.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full px-4 sm:px-8 lg:px-16 py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-900 dark:text-white md:text-xl">
                  Connect your wallet and start building your next Web3 project today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mt-4">
                { !isConnected && <w3m-button />}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row sm:px-8 lg:px-16 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Next.js AppKit Starter. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}