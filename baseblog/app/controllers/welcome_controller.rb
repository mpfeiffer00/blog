class WelcomeController < ApplicationController
  def index
    @articles = Article.order_by(display_dttm: :desc).limit(5)
    @tea_articles = Article.where(category: "tea").order_by(display_dttm: :desc).limit(4)

    @latest_articles = []
    @latest_articles << (Article.where(category: "blog").order_by(display_dttm: :desc).first)
    @latest_articles << (Article.where(category: "baking").order_by(display_dttm: :desc).first)
    @latest_articles << (Article.where(category: "tea").order_by(display_dttm: :desc).first)
    @latest_articles << (Article.where(category: "drinks").order_by(display_dttm: :desc).first)
    @latest_articles << (Article.where(category: "cooking").order_by(display_dttm: :desc).first)
    @latest_articles << (Article.where(category: "whisky").order_by(display_dttm: :desc).first)
    puts "latest: #{@latest_articles}"
    @latest_articles = @latest_articles - [nil]
    puts "latest: #{@latest_articles}"
  end
end
