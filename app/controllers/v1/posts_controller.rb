module V1
    class PostsController < ApplicationController
        before_action :set_user
        def index # 特定ユーザーのpost一覧を取得
            user = User.find(params[:user_id])
            posts = user.posts

            render json: {
                posts: posts
            }, status: :ok
        end

        def show
            post = Post.find(params[:post_id])
        end

        def create
            post = @user.posts.build(post_params)
            post.save!
        end

        private

        def set_user
            @user = User.find(params[:user_id])
        end

        def post_params
            # 練習の種類（kind_of_practice）によりユーザーが入力する距離単位が異なるため、揃える
            kind_of_practice = params[:post][:kind_of_practice].to_i
            params[:post][:post_records_attributes].each do |record_params|
                record_params[:distance] = align_distance_unit(kind_of_practice, record_params[:distance].to_f)
            end

            # ウォーミングアップ、クールダウンの距離単位を揃える
            params[:warming_up_distance] = params[:warming_up_distance].to_f*1000
            params[:cooling_down_distance] = params[:cooling_down_distance].to_f*1000
 
            post_params = params.require(:post).permit(
                :weather, :place, :kind_of_practice, :strength, :content, :practice_day, :practice_timezone, :warming_up_distance, :cooling_down_distance,
                post_records_attributes:[:distance, :time, :record_type]
            )
        end

        def align_distance_unit(kind_of_practice, distance) # distanceの単位をmに揃える
            m = [1, 2, 3, 4, 6, 7]
            km = [0, 5]
            if m.include?(kind_of_practice)
                return distance
            else
                return distance*1000
            end
        end
    end
end