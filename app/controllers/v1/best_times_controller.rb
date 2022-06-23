class V1::BestTimesController < ApplicationController
    before_action :set_best_time, only: [:show, :update, :destroy]
    before_action :authenticate_v1_user!

    def index
        best_times = BestTime.where(user_id: current_v1_user.id)
        render json: {
            best_times: best_times
        }, status: :ok
    end

    def show
        render json: {
            best_time: @best_time
        }, status: :ok
    end

    def create
        best_time = @current_v1_user.best_times.build(best_time_params)
        if best_time.save!
            render json: {
                best_time: best_time
            }, status: :created
        else
            render json: {}, status: :internal_server_error
        end
    end

    def update
        if current_v1_user.id == @best_time.user_id
            @best_time.update(best_time_params)
            render json: {
                best_time: @best_time
            }, status: :ok
        else
            render json: {}, status: :forbidden
        end
    end

    def destroy
        if current_v1_user.id == @best_time.user_id
            @best_time.update(best_time_params)
            render json: {}, status: :no_content
        else
            render json: {}, status: :forbidden
        end
    end

    private

    def set_best_time
        @best_time = BestTime.find(params[:id])
    end

    def best_time_params
        params.permit(
            :best_time, :distance, :date, :event, :official
        )
    end

end