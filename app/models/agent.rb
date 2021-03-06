class Agent < ApplicationRecord
  has_many :buyers
  has_many :properties
  # SELECT agents.id, first_name, last_name, sold, COUNT(*) as frequency
  # FROM agents
  # INNER JOIN properties p ON p.agent_id = agents.id
  # WHERE sold <> true
  # GROUP BY agents.id, sold
  # ORDER BY COUNT(*) DESC
  def self.unsold_home
    select("agents.id, first_name, last_name,  COUNT(*) as frequency")
      .joins("INNER JOIN properties p ON p.agent_id = agents.id")
      .where("sold <> TRUE")
      .group("agents.id, sold")
      .order("COUNT(*) DESC")
  end
end
