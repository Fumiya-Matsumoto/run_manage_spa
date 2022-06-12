module V1
    class UsersController < ApplicationController
        before_action :set_user, only: [:show]
        def index
            users = User.all
            render json: {
                users: users
            }, status: :ok
        end

        def show
            render json: {
                user: @user
            }, status: :ok
        end

        private
        def set_user
            @user = User.find(params[:id])
        end
    end
end
