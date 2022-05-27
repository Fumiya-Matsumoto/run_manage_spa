require 'rails_helper'

describe 'PostAPI' do
    it 'is valid' do
        expect(FactoryBot.build(:user)).to be_valid
    end

    it 'is invalid without an email addoress' do
        user = FactoryBot.build(:user, email: nil)
        user.valid?
        expect(user.errors[:email]).to include("can't be blank")
    end

    it "is invalid with a dublicate email address" do
        FactoryBot.create(:user, email: "text@example.com")
        user = FactoryBot.build(:user, email: "text@example.com")
        user.valid?
        expect(user.errors[:email]).to include("has already been taken")
    end
end