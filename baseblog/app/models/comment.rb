class Comment
  include Mongoid::Document

  belongs_to :article
  field :commenter, type: String
  field :body, type: String
  field :insert_dttm, type: DateTime, default: -> {Time.now}
end
