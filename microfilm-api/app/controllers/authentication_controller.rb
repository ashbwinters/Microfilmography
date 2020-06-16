class AuthenticationController < ApplicationController
    def login
        @user = User.find_by(username: params[:username])

        if @user

            if @user.authenticate(params[:password])
                token = create_token(@user)

                render json: {
                    token: token,
                }
            else
                render json: {message: "Password is incorrect. Please try again."}, status: :unauthorized
            end
        else
            render json: {message: "Username is incorrect. Please try again."}, status: :unauthorized
        end
    end

end
