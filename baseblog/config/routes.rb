Rails.application.routes.draw do
  get 'welcome/index'
  get 'baking', to: 'baking#index'

  post '/ckeditor/pictures' => 'articles#pictures'

  resources :articles do
    resources :comments
  end

  # post '/upload_file' => 'articles#upload_file', :as => :upload_file
  # post '/upload_file' => 'articles#upload_file', :as => :froala_upload_file
  # post '/upload_video' => 'articles#upload_video', :as => :froala_upload_video
  # get '/load_images' => 'articles#load_images', :as => :froala_load_images

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
