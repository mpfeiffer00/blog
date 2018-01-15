class WelcomeController < ApplicationController
  def index
    #@articles = Article.all
    @articles = Article.order_by(display_dttm: :desc).limit(5)
  end
end
