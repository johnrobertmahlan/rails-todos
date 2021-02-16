class TasksController < ApplicationController
    # def new
    #     @task = Task.new
    # end

    def index
        @tasks = Task.all
    end

    def create
        @task = Task.create(task_params)
        @task.save
        redirect_to root_path
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
        @tasks = Task.all
        redirect_to root_path
    end

    def show
        @task = Task.find(params[:id])
    end

    private
    def task_params
        params.permit(:title, :note, :completed)
    end
end
