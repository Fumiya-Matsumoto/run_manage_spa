module V1
    class UsersController < ApplicationController
        before_action :set_user, only: [:show, :following, :followers]
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

        def following
            render json: {
                following: @user.following
            }, status: :ok
        end

        def followers
            render json: {
                followers: @user.followers
            }, status: :ok
        end

        private
        def set_user
            @user = User.find(params[:id])
        end
    end
end
