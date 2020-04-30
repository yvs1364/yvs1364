class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name =>"yvs",
        :guid => " 000000000"
      }
      ]}.to_json
    end
  end
