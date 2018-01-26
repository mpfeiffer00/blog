class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :getIconForArticleCategory
  def getIconForArticleCategory(category)
    #https://airbrake.io/blog/rails/5-common-mistakes-rails-development
    case category
      when "blog"
         "/demo/icons/text-documents-32.png"
      when "baking"
         "/demo/icons/muffin-decorated-with-a-chocolate-heart-32.png"
      when "tea"
         "/demo/icons/japanese-teapot-32.png"
      when "drinks"
         "/demo/icons/cocktail-on-a-glass-32.png"
      when "cooking"
         "/demo/icons/restaurant-32.png"
      when "whisky"
         "/demo/icons/drink-glass-with-beverage-inside-32.png"
      when "travel"
         "/demo/icons/traveler-with-a-suitcase-32.png"
      end
  end
end
