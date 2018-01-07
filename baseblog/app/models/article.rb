class Article
  include Mongoid::Document
  include Mongoid::Slug

  field :title, type: String
  slug :title
  field :text, type: String
  field :category, type: String
  has_many :comments, dependent: :delete

  validates_presence_of :title
  validates_presence_of :text
  validates_presence_of :category

  CATEGORY = [BLOG = "blog",
    BAKING = "baking",
    TEA = "tea",
    DRINKS = "drinks",
    COOKING = "cooking",
    WHISKY = "whisky"]
end
