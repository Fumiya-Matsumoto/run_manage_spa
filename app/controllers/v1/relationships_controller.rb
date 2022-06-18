class V1::RelationshipsController < ApplicationController
    before_action :authenticate_v1_user!

    def create
        user = User.find(params[:followed_id])
        if current_v1_user.follow(user)
            render json: {
                followed: user
            }, status: :created
        else
            render json: {}, status: :forbidden
        end
    end

    def destroy
        user = Relationship.find(params[:id]).followed
        if current_v1_user.unfollow(user)
            render json: {
                unfollowed: user
            }, status: :ok
        else
            render json: {}, status: :forbidden
        end
    end
end
