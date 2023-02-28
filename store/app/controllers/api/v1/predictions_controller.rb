class Api::V1::PredictionsController < ApplicationController
  before_action :set_prediction, only: %i[ show update destroy ]

  # GET /predictions
  def index
    @predictions = Prediction.all

    render json: @predictions
  end

  # GET /predictions/1
  def show
    render json: @prediction
  end

  # POST /predictions
  def create
    @prediction = Prediction.new(prediction_params)

    if @prediction.save
      render json: @prediction, status: :created, location: @prediction
    else
      render json: @prediction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /predictions/1
  def update
    if @prediction.update(prediction_params)
      render json: @prediction
    else
      render json: @prediction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /predictions/1
  def destroy
    @prediction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prediction
      @prediction = Prediction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def prediction_params
      params.require(:prediction).permit(:date, :predict)
    end
end
