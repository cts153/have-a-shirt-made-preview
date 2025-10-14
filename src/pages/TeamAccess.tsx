import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2, Lock } from "lucide-react";

const TeamAccess = () => {
  const [accessCode, setAccessCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!accessCode.trim()) {
      toast.error('Please enter an access code');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('teams')
        .select('*')
        .eq('access_code', accessCode.trim())
        .eq('is_active', true)
        .single();

      if (error || !data) {
        toast.error('Invalid access code');
        return;
      }

      toast.success(`Welcome to ${data.name}'s catalog!`);
      navigate(`/team-catalog/${data.id}`);
    } catch (error) {
      console.error('Error validating access code:', error);
      toast.error('Failed to validate access code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl">Team Portal</CardTitle>
              <CardDescription className="text-base">
                Enter your team's access code to view your exclusive catalog and pricing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="access-code">Access Code</Label>
                  <Input
                    id="access-code"
                    type="text"
                    placeholder="Enter your team code"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="text-center text-lg font-mono uppercase"
                    maxLength={20}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    'Access Team Catalog'
                  )}
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an access code?{' '}
                  <a href="mailto:support@printpro.com" className="text-primary hover:underline">
                    Contact us
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamAccess;
