export interface SignupProps {
  loading?: boolean;
  error?: boolean;
  onContinueWithGoogle: (googleData: any) => void;
  onContinueWithEmail: (email: string) => void;
}
