module V1
    class PostsController < ApplicationController
        before_action :set_user
        def index
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

            # 距離の単位をmに直す & postあたりの合計距離を計算・保存
            kind_of_practice = post.kind_of_practice
            post_records = post.post_records
            post_distance = 0
            post_records.each do |record|
                record.distance = align_distance_unit(kind_of_practice, record.distance.to_f) # to_fによりnilを0.0に変換
                post_distance += record.distance
            end
            post_distance += post.warming_up_distance.to_f + post.cooling_down_distance.to_f
            post.distance = post_distance
            post.save!
        end

        private

        def set_user
            @user = User.find(params[:user_id])
        end

        def post_params
            post_params = params.require(:post).permit(
                :weather, :place, :kind_of_practice, :strength, :content, :practice_day, :practice_timezone,
                post_records_attributes:[:distance, :time, :pace, :record_type]
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

        def shape_time(hour: 0, min: 0, sec: 0, msec: 0) 
            return hour*3600 + min*60 + sec + msec*0.01
        end

        def calculate_pace(time, distance)
            return time / distance
        end
    end
end