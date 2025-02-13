
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterMain = () => {
  return (
    <Footer className='bg-teal-100'>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Careers
              </Footer.Link>
              <Footer.Link href="#">
                Brand Center
              </Footer.Link>
              <Footer.Link href="#">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Discord Server
              </Footer.Link>
              <Footer.Link href="#">
                Twitter
              </Footer.Link>
              <Footer.Link href="#">
                Facebook
              </Footer.Link>
              <Footer.Link href="#">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                iOS
              </Footer.Link>
              <Footer.Link href="#">
                Android
              </Footer.Link>
              <Footer.Link href="#">
                Windows
              </Footer.Link>
              <Footer.Link href="#">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-teal-300 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Online Books"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/?rcs=ATCoLDV5Zh6KYY3WPUyn_U_38nh56A_JsKGFlXQeB1PwvVvBt-TgOjzSH5KeLC1xy3Tw5OS0eaIX1QO-M8dNn0POlsRSCD3I66J9id4uvbdIj2T4L-lR_GDR6U2zNRWX7dvmcY-Kl2daM5NXhvIARh258tza1U2VZpJzJA"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://x.com/"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterMain;