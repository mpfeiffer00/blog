class Article
  include Mongoid::Document
  include Mongoid::Slug

  field :title, type: String
  slug :title
  field :text, type: String
  has_many :comments, dependent: :delete

  validates_presence_of :title
  validates_presence_of :text
end
