class TasksController < ApplicationController
    # def new
    #     @task = Task.new
    # end

    def index
        @tasks = Task.all
    end

    def create
        @task = Task.create(task_params)
        puts  "A new record has been created"
        @task.save
        redirect_to root_path
    end

    private
    def task_params
        params.permit(:title)
    end
end
