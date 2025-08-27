import { Card } from "@/globals/components/Card";
import { Tabs, TabTriggers, TabContent } from "@/globals/components/Tabs";

export default function Auth() {
  return (
   <>
     <div 
        className="relative h-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/Haiku-hero.jpg")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background/80"></div>
      </div>

    <div className="relative -mt-16 z-10">
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-md mx-auto">
          <Card type="main" className="p-8 bg-div/95 backdrop-blur-sm shadow-[var(--shadow-soft)] border-border/50">
            <Tabs defaultValue="login" className="w-full">
              <TabTriggers
                triggerList={[
                  { value: "login", label: "Sign in" },
                  { value: "signup", label: "Sing up" },
                ]}
                className="grid w-full grid-cols-2 mb-8 bg-secondary/50"
              />

              {/* Login Form */}
              <TabContent value="login" className="space-y-6">
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-semibold text-foreground">
                    Welcome Back
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Continue your haiku journey
                  </p>
                </div>
              </TabContent>

              {/* Signup Form */}
              <TabContent value="signup" className="space-y-6">
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-semibold text-foreground">
                    Join Us
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Start creating beautiful haiku
                  </p>
                </div>
              </TabContent>
            </Tabs>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border/50" />
              </div>
            </div>

            {/* Quote */}
            <div className="text-center mt-8 space-y-2">
              <p className="text-muted-foreground italic text-sm">
                &quot;An old silent pond
                <br />
                A frog jumps into the pond—
                <br />
                Splash! Silence again.&quot;
              </p>
              <p className="text-muted-foreground text-xs">— Matsuo Bashō</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
     </>
  );
}
