require 'rails_helper'

describe 'PostAPI' do
    it "create new post" do
        valid_params = {
            "practice_day": "2021-05-23 19:00",
            "practice_timezone": "2",
            "kind_of_practice": "2", 
            "weather": "0",
            "place": "1",
            "content": "インターバルをした",
            "strength": "4",
            "warming_up_distance": "1",
            "post_records_attributes": [{
            "distance": "1000", 
            "time":"183",
            "record_type": "0"
            }, {
            "distance": "200", 
            "time":"58",
            "record_type": "1"
            }, {
            "distance": "1000", 
            "time":"181",
            "record_type": "0"
            }, {
            "distance": "200", 
            "time":"59",
            "record_type": "1"
            }, {
            "distance": "1000", 
            "time":"172",
            "record_type": "0"
            }]
        }
    end

end