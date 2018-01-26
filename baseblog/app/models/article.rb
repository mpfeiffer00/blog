class Article
  include Mongoid::Document
  include Mongoid::Slug

  field :title, type: String
  slug :title
  field :text, type: String
  field :category, type: String
  field :insert_dttm, type: DateTime, default: -> {Time.now}
  field :display_dttm, type: DateTime, default: -> {Time.now}

  has_many :comments, dependent: :delete

  validates_presence_of :title
  validates_presence_of :text
  validates_presence_of :category

  CATEGORY = [BLOG = "blog",
    BAKING = "baking",
    TEA = "tea",
    DRINKS = "drinks",
    COOKING = "cooking",
    WHISKY = "whisky",
    TRAVEL = "travel"]
end
