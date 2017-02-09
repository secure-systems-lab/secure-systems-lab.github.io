module Jekyll
  class DataReader
    include Convertible
    attr_accessor :data, :content
    attr_accessor :site, :context
    def read_data_file_with_inclusion(path)
      res = nil
        puts "\n\n !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"
        site = Jekyll.sites.last # If there are multiple sites this might be the wrong one
      #begin
        dir = File.dirname(path)
        filename = File.basename(path)
        content = File.read(@path || site.in_source_dir(dir, filename))
        puts "dir, filename: #{[dir, filename].inspect}"

        #processed_filename = 
        #  if contains_frontmatter?(content)
        #    scrubbed_content = without_frontmatter(content)

            context = Liquid::Context.new({}, {}, { :site => site })
            #template = Liquid::Template.parse(scrubbed_content)
            template = Liquid::Template.parse(content)
            rendered = template.render(context)

            puts "RENDERED:"
            #puts rendered

            Dir.mktmpdir do |dir|
              tmppath = File.join(dir, filename)

              puts "tmppath: #{tmppath.inspect}"
              File.write(tmppath, rendered)
              puts "File.read: #{File.read(tmppath)[0..200]}"

              res = read_data_file_without_liquid(tmppath)
              puts "after read_data"
            end
            puts"====="
          #else
          #  read_data_file_without_liquid(path)
          #end
      #rescue => e
      #  Jekyll.logger.warn "SSL-specific error reading file #{filename}: #{e.message}"
      #end
        puts "\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"

      #read_data_file_without_liquid(path)
        res
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
