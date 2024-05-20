class AddLastVisitedAtToPatients < ActiveRecord::Migration[7.1]
  def change
    add_column :patients, :last_visited_at, :date
  end
end
