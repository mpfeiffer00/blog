class BakingController < ApplicationController
  def index
    @articles = Article.where(category: Article::BAKING)
  end
end
