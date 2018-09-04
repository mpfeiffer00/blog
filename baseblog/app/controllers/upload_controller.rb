class UploadController < ActionController::Base

  def upload_file
    puts "UPLOAD_IMAGE HOLY SHIT IN UPLOAD"
    render :json => FroalaEditorSDK::File.upload(params)
  end

end
