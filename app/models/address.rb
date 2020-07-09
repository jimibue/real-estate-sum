class Address < ApplicationRecord
  belongs_to :property

  #TODO:: model method using custom sql to get distinct cities
  def self.distinct_city
    select("DISTINCT city")
  end
end
