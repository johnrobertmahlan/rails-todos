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
        redirect_to root_path
    end

    def show
        @task = Task.find(params[:id])
    end

    def update
        @task = Task.find(params[:id])
        @task.update(task_params)
        redirect_to root_path
    end

    private
    def task_params
        params.permit(:title, :note, :completed)
    end
end
