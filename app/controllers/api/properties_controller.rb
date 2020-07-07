class Api::PropertiesController < ApplicationController
  def index
    render json: Property.available
    # render json: Property.all
  end
end
