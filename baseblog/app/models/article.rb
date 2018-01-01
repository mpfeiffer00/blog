class Article
  include Mongoid::Document
  include Mongoid::Slug

  has_many :comments, dependent: :delete
  field :title, type: String
  slug :title
  field :text, type: String
end
