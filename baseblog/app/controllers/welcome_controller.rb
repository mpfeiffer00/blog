class WelcomeController < ApplicationController
  def index
    @articles = Article.order_by(display_dttm: :desc).limit(5)
    @tea_articles = Article.where(category: "tea").order_by(display_dttm: :desc).limit(4)
  end
end
