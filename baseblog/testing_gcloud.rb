require 'rest-client'
require 'json'
require 'oauth'
require "google/cloud/storage"

def shit
  response = RestClient.post 'https://www.googleapis.com/storage/v1/b/tanks-workshop/o/IMG_20180513_191444.jpg'
  puts response.code
  puts response.body
end

def upload2
  access_token = 'ya29.Gls7Bzy1QQWtUbGPeKeiCBfTuV9eNtH211lh_WHjvO8cANBuDFECPKQukTKELePMidUwvPjBo03I43wl5SCGML3hbUlR_GsF3lw1uhG8c_Pns5F-KisiMiWTm4wG'
   file = File.open('/home/vagrant/blog/baseblog/public/demo/320x200.png', 'rb');

   begin
   response = RestClient.post(
     'https://storage.googleapis.com/tanks-workshop/drink.png',
     file,
     'Accept' => 'application/json',
     'Authorization' => access_token,
     'Content-Type' => 'image/png',
   )
 rescue => e
   puts e.response
 end
  if response != nil then response.code end
  if response != nil then response.body end
end

def upload3
   access_token = 'ya29.Gls7Bzy1QQWtUbGPeKeiCBfTuV9eNtH211lh_WHjvO8cANBuDFECPKQukTKELePMidUwvPjBo03I43wl5SCGML3hbUlR_GsF3lw1uhG8c_Pns5F-KisiMiWTm4wG'
   file = File.open('/home/vagrant/blog/baseblog/public/demo/320x200.png', 'rb');

   response = RestClient.post(
     "https://www.googleapis.com/upload/storage/v1/b/tanks-workshop/o?uploadType=media&name=ahshit.png",
     { 'upload' => file },
     'Accept' => 'application/json',
     'Authorization' => access_token,
     'Content-Type' => 'image/png',
   )
  puts response.code
  puts response.body
end

def upload4
   storage = Google::Cloud::Storage.new
   bucket = storage.bucket "tanks-workshop"
   puts bucket.name
   files = bucket.files
   files.all do |file|
     puts "   " + file.name
   end

   bucket.create_file '/home/vagrant/blog/baseblog/public/demo/320x200.png', "drink.png"
   puts "uploaded?"
end

upload4
