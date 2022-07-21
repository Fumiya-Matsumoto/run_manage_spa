// サインアップ
export type SignUpParams = {
  email: string;
  password: string;
  passwprdConfirmation: string
}

// ログイン
export interface SignInParams {
  email: string
  password: string
}

export type User = {
  id: number;
  uid: string;
  provider: string;
  name?: string;
  email: string;
  age?: number;
  sex?: number;
  height?: number;
  weight?: number;
  created_at: Date;
  updated_at: Date;
};  