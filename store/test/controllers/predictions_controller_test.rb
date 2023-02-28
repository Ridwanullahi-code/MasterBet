require "test_helper"

class PredictionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prediction = predictions(:one)
  end

  test "should get index" do
    get predictions_url, as: :json
    assert_response :success
  end

  test "should create prediction" do
    assert_difference("Prediction.count") do
      post predictions_url, params: { prediction: { date: @prediction.date, predict: @prediction.predict } }, as: :json
    end

    assert_response :created
  end

  test "should show prediction" do
    get prediction_url(@prediction), as: :json
    assert_response :success
  end

  test "should update prediction" do
    patch prediction_url(@prediction), params: { prediction: { date: @prediction.date, predict: @prediction.predict } }, as: :json
    assert_response :success
  end

  test "should destroy prediction" do
    assert_difference("Prediction.count", -1) do
      delete prediction_url(@prediction), as: :json
    end

    assert_response :no_content
  end
end
