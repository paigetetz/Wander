class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic
  has_many :bookings
end
