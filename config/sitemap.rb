# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "https://www.davidclim.fr"

SitemapGenerator::Sitemap.create do
  # Put links creation logic here.
  #
  # The root path '/' and sitemap index file are added automatically for you.
  # Links are added to the Sitemap in the order they are specified.
  #
  # Usage: add(path, options={})
  #        (default options are used if you don't specify)
  #
  # Defaults: :priority => 0.5, :changefreq => 'weekly',
  #           :lastmod => Time.now, :host => default_host
  #
  # Examples:
  #
  # Add '/articles'
  #
  #   add articles_path, :priority => 0.7, :changefreq => 'daily'
  #
  # Add all articles:
  #
  #   Article.find_each do |article|
  #     add article_path(article), :lastmod => article.updated_at
  #   end


  # Priorités et fréquences de changement adaptées au SEO
  # Pages principales
  add root_path,                       priority: 1.0, changefreq: 'weekly'
  add installation_climatisation_path, priority: 0.9, changefreq: 'monthly'
  add maintenance_entretien_climatisation_path, priority: 0.9, changefreq: 'monthly'
  add depannage_climatisation_path,    priority: 0.9, changefreq: 'monthly'
  add realisation_climatisation_path,  priority: 0.6, changefreq: 'yearly'

  # Contact (tu utilises un resource minimal)
  add new_contact_path,                priority: 0.7, changefreq: 'yearly'

end
