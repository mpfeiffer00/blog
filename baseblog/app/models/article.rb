class Article
  include Mongoid::Document

  has_many :comments, dependent: :delete
  field :title, type: String
  field :text, type: String
end
