module SizeUpcaseFilter
  def size_upcase(input)
    input.gsub(/([A-Z]+)/, '<span class="upcase">\1</span>')
  end
end

Liquid::Template.register_filter(SizeUpcaseFilter)
