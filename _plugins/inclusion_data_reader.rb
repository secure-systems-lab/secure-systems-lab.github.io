module Jekyll
  class DataReader
    include Convertible
    attr_accessor :data, :content
    attr_accessor :site, :context
    def read_data_file_with_inclusion(path)
        puts "\n\n !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"
        site = Jekyll.sites.last # If there are multiple sites this might be the wrong one
      #begin
        dir = File.dirname(path)
        filename = File.basename(path)
        content = File.read(@path || site.in_source_dir(dir, filename))
        puts "dir, filename: #{[dir, filename].inspect}"

        processed_filename = 
          if contains_frontmatter?(content)
            scrubbed_content = without_frontmatter(content)

            context = Liquid::Context.new({}, {}, { :site => site })
            template = Liquid::Template.parse(scrubbed_content)
            rendered = template.render(context, "foo" => 'abc')

            puts "RENDERED:"
            puts rendered
            puts"====="
            filename
          else
            filename
          end
      #rescue => e
      #  Jekyll.logger.warn "SSL-specific error reading file #{filename}: #{e.message}"
      #end
        puts "\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"

      read_data_file_without_liquid(path)
    end

    alias_method :read_data_file_without_liquid, :read_data_file
    alias_method :read_data_file, :read_data_file_with_inclusion
  end
end

def contains_frontmatter?(content)
    !!(content =~ Jekyll::Document::YAML_FRONT_MATTER_REGEXP)
end

def without_frontmatter(content)
    match = Jekyll::Document::YAML_FRONT_MATTER_REGEXP.match(content)
    if match
      match.post_match
    else
      content
    end
end
