require 'rails_helper'

describe 'RelationshipAPI' do
    it 'is valid' do
        expect(FactoryBot.build(:relationship)).to be_valid
    end
end