class V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
    private
    #ユーザー登録時に使用
    def sign_up_params
        params.permit(:name, :email, :age, :sex, :height, :weight, :password, :password_confirmation)
    end
    #ユーザー更新時に使用
    def account_update_params
        params.permit(:name, :email, :age, :sex, :height, :weight)
    end
end

