require "test_helper"

class HomesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @home = homes(:one)
  end

  test "should get index" do
    get homes_url, as: :json
    assert_response :success
  end

  test "should create home" do
    assert_difference("Home.count") do
      post homes_url, params: { home: { date: @home.date, predict: @home.predict } }, as: :json
    end

    assert_response :created
  end

  test "should show home" do
    get home_url(@home), as: :json
    assert_response :success
  end

  test "should update home" do
    patch home_url(@home), params: { home: { date: @home.date, predict: @home.predict } }, as: :json
    assert_response :success
  end

  test "should destroy home" do
    assert_difference("Home.count", -1) do
      delete home_url(@home), as: :json
    end

    assert_response :no_content
  end
end
