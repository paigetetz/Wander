class PostsController < ApplicationController
    # before_action  only:[:index]
    
    def index
        render json: Post.all
    end

    def show
        post = Post.find_by_id(params[:id])
            if post
                render json: post
            else
                render json: { error: "Post not found" }, status: :not_found
            end
    end

    def create
        post = Post.create(Post_params)
            if Post.valid?
                render json: post
            else 
                render json: {error: post.errors.full_messages}, status: :unprocessable_entity
            end
    end

    def update 
        post = Post.find_by_id(params[:id])
        if post
            Post.update(post_params)
            render json: post
        else
            render json: {error: 'Post not found'}, status: :not_found
        end
    end

    def destroy
        post = Post.find_by_id(params[:id])
        if post
            Post.destroy
            head :no_content
        else 
            render json: {error: 'Post not found'}, status: :not_found
        end
    end 

    private


    def post_params
        params.permit(:experience_id, :user_id, :comment)
    end


end
