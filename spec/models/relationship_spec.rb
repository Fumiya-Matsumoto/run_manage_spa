require 'rails_helper'

RSpec.describe Relationship, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  it 'should be valid' do
    # user1 = FactoryBot.create(:user, id: 1)
    # user2 = FactoryBot.create(:user, id: 2)
    expect(FactoryBot.build(:relationship)).to be_valid
    # expect(relationship.valid?).to be_valid
    # expect(FactoryBot.build(:user)).to be_valid
  end
end
