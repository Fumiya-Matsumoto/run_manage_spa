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

            kind_of_practice = post.kind_of_practice
            post_records = post.post_records

            post_distance = 0
            main_distance = 0
            recovery_distance = 0

            post_records.each do |record|
                record_type = record.record_type
                # 距離の単位をmに直す
                record.distance = align_distance_unit(kind_of_practice, record.distance.to_f) # to_fによりnilを0.0に変換
                # postあたりの合計距離を計算・保存
                post_distance += record.distance
                # paceを計算
                record.pace = record.time / record.distance # 単位はm/s

            end
            post_distance += post.warming_up_distance.to_f*1000 + post.cooling_down_distance.to_f*1000 # アップとダウンはkm表示という仮定
            post.distance = post_distance
            
            main_records = post_records.where(record_type: 0)
            recovery_records = post_records.where(record_type: 1)
            num_main = main_records.count
            num_recovery = recovery_records.count
            pace_main = main_records.sum(:pace) / num_main.to_f
            pace_recovery = recovery_records.sum(:pace) / num_recovery.to_f
            
            post.num_main = num_main
            post.num_recovery = num_recovery
            post.pace_main = pace_main
            post.pace_recovery = pace_recovery

            post.save!
        end

        private

        def set_user
            @user = User.find(params[:user_id])
        end

        def post_params
            post_params = params.require(:post).permit(
                :weather, :place, :kind_of_practice, :strength, :content, :practice_day, :practice_timezone, :warming_up_distance, :cooling_down_distance,
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
    end
end