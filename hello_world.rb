puts "Hello world!"

name = "Katsu"
age = 26
puts "#{name} is #{age} years-old."

age += 1
puts "#{name} is #{age} years-old."

peeps = ['Yun', 'Julien', 'Munekatsu', 'Shogo']

# CRUD
# Create
peeps << "Grant"
peeps.push("Lukasz")
p peeps

# Read
puts peeps[0]

# Update
peeps[0] = "Super Yun"
p peeps

# Delete
peeps.delete_at(2)
p peeps


peeps.each do |person|
  puts person.upcase
end

age = 13

if age == 18
  puts 'Giri giri okay'
elsif age > 18
  puts 'You can vote'
else
  puts 'Please get back to your toys.'
end


student = {
  firstName: "Boris",
  lastName: "Paillard"
}

p student


puts student[:firstName]

# A method that is squaring a number
def square(num)
  num * num
end


puts square(42)






