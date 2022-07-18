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
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};  