module V1
    class PostRecordsController < ApplicationController
        def index
            user = User.find(params[:user_id])
            posts = user.posts

            render json: {
                posts: posts
            }, status: :ok
        end
    end
end